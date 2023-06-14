import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormComents = () => {
  const [comment, setComment] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isLogged, setIsLogged] = useState(true);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigate = useNavigate();

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const updateSubmitButton = () => {
    setIsSubmitDisabled(comment === '' && selectedOption === '');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Faça o que precisa ser feito com o comentário e a opção selecionada
    console.log('Comentário:', comment);
    console.log('Opção selecionada:', selectedOption);
  };

  // Atualizar o estado do botão de envio ao alterar o campo de comentário ou a opção selecionada
  useEffect(updateSubmitButton, [comment, selectedOption]);

  return (
    <form className="flex flex-col gap-3 bg-grey-10 w-80 sm:w-4/5" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <div className={`rounded-full w-8 h-8 bg-blue-700 flex items-center justify-center`}>
          <p className="text-center text-white font-medium text-sm flex items-center justify-center">
            {/* {GetFirstLetterOfEachWord(user.username)} */}
            AS
          </p>
        </div>
        <h2 className="text-grey-1 text-sm font-medium">Adriano Souza</h2>
      </div>
      <div className="relative">
        <textarea
          id="comment"
          className="w-72 h-32 sm:w-3/4 border-2 border-grey-7 placeholder:text-grey-3 placeholder:font-normal placeholder:text-base p-3"
          placeholder="Digitar comentário"
          value={comment}
          onChange={handleCommentChange}
        />
        {isLogged ? (
          <button
            type="submit"
            className="bg-brand-1 border-2 border-brand-1 rounded w-24 h-9 py-3 px-5 flex items-center justify-center text-sm font-semibold text-white-fixed sm:absolute bottom-5 right-40"
            disabled={isSubmitDisabled}
          >
            Comentar
          </button>
        ) : (
          <button
            type="button"
            className="bg-grey-5 border border-grey-5 rounded w-24 h-9 py-3 px-5 flex items-center justify-center text-sm font-semibold text-white-fixed"
            onClick={() => navigate('/register')}
          >
            Comentar
          </button>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => handleOptionChange('Gostei Muito!')}
          className={`selectedOption === 'Gostei Muito!' ? 'selected' : '' bg-grey-7 rounded-3xl py-0 px-2 text-grey-3 font-normal text-xs`}
        >
          Gostei Muito!
        </button>
        <button
          type="button"
          onClick={() => handleOptionChange('Incrível')}
          className={`selectedOption === 'Incrível' ? 'selected' : '' bg-grey-7 rounded-3xl py-0 px-2 text-grey-3 font-normal text-xs`}
        >
          Incrível
        </button>
        <button
          type="button"
          onClick={() => handleOptionChange('Recomendarei para meus amigos!')}
          className={`selectedOption === 'Recomendarei para meus amigos!' ? 'selected' : '' bg-grey-7 rounded-3xl py-0 px-2 text-grey-3 font-normal text-xs`}
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </form>
  );
};
