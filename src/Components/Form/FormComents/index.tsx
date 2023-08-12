import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext";
import { api } from "../../../Services";
import { parseCookies, setCookie } from "nookies";

export const FormComents = () => {
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigate = useNavigate();
  const { announcement, user, comments, setComments, user_token } =
    useContext(AuthContext);

  const cookies = parseCookies();
  const { user_id } = cookies;

  const GetFirstLetterOfEachWord = (username: string) => {
    const words = username.split(" ");
    const firstWords = words.map((word) => word.charAt(0));
    return firstWords.join("");
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const updateSubmitButton = () => {
    setIsSubmitDisabled(comment === "" && selectedOption === "");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComments = comment + selectedOption;
    registerComments(newComments);
  };

  useEffect(updateSubmitButton, [comment, selectedOption]);

  const registerComments = async (data: string) => {
    try {
      console.log(user_token);
      console.log(data);
      console.log(user_id);
      const request = await api.post(
        `comments/${announcement?.id}`,
        { comments: data, user_id: user_id },
        {
          headers: {
            Authorization: `Bearer ${user_token}`,
          },
        }
      );
      setComments([...comments, request.data]);
      const commentsString = JSON.stringify(comments);
      setCookie(null, "comments_data", commentsString);
      setComment("");
      setSelectedOption("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      className="flex flex-col gap-3 bg-grey-10 w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <div
              className={`rounded-full w-8 h-8 bg-blue-700 flex items-center justify-center`}
            >
              <p className="text-center text-white font-medium text-sm flex items-center justify-center">
                {GetFirstLetterOfEachWord(user?.name)}
              </p>
            </div>
            <h2 className="text-grey-1 text-sm font-medium">{user?.name}</h2>
          </>
        ) : null}
      </div>
      <div className="relative w-full">
        <textarea
          id="comment"
          className=" border-2 border-grey-7 placeholder:text-grey-3 placeholder:font-normal placeholder:text-base p-3 resize-none w-full h-[128px]"
          placeholder="Digitar comentário"
          value={selectedOption + comment}
          onChange={handleCommentChange}
        />
        {user ? (
          <button
            type="submit"
            className="bg-brand-1 border-2 border-brand-1 rounded w-24 h-9 py-3 px-5 flex items-center justify-center text-sm font-semibold text-white-fixed sm:absolute bottom-5 right-4 cursor-pointer"
            disabled={isSubmitDisabled}
          >
            Comentar
          </button>
        ) : (
          <button
            type="button"
            className="bg-grey-5 border border-grey-5 rounded w-24 h-9 py-3 px-5 flex items-center justify-center text-sm font-semibold text-white-fixed cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Comentar
          </button>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => handleOptionChange("Gostei Muito!")}
          className={`selectedOption === 'Gostei Muito!' ? 'selected' : '' bg-grey-7 rounded-3xl py-0 px-2 text-grey-3 font-normal text-xs`}
        >
          Gostei Muito!
        </button>
        <button
          type="button"
          onClick={() => handleOptionChange("Incrível!")}
          className={`selectedOption === 'Incrível!' ? 'selected' : '' bg-grey-7 rounded-3xl py-0 px-2 text-grey-3 font-normal text-xs`}
        >
          Incrível!
        </button>
        <button
          type="button"
          onClick={() => handleOptionChange("Recomendarei para meus amigos!")}
          className={`selectedOption === 'Recomendarei para meus amigos!' ? 'selected' : '' bg-grey-7 rounded-3xl py-0 px-2 text-grey-3 font-normal text-xs`}
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </form>
  );
};
