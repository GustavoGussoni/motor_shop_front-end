import { useContext } from "react";
import { CardComents } from "../CardComents";
import { FormComents } from "../Form/FormComents";
import { AuthContext } from "../../Contexts/AuthContext";

export const Coments = () => {
    const { comments } = useContext(AuthContext);

    return (
        <section className='bg-transparent w-full gap-6 pr-0 pl-0 px-9 flex mb-5 flex-col'>
            <div className='flex flex-col gap-6  rounded-2 bg-grey-10 px-7 py-9 w-[100%]'>
                <h2 className='text-xl'>Comentários</h2>
                <ul className='flex flex-col gap-7'>
                    {comments.map((el, index) => {
                        return (
                            <CardComents
                                key={index}
                                comments={el.comments}
                                created_at={el.created_at}
                                user={el.user}
                                id={el.id}
                            />
                        );
                    })}
                </ul>
                <FormComents />
            </div>
        </section>
    );
};
