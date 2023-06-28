import { Button } from "../Button";

export const DeleteAnnoucement = () => {
    return (
        <div>
            <div>
                <p>Excluir anúncio</p>
                <p>Tem certeza que deseja remover este anúncio?</p>
                <p>
                    Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e
                    removerá seus dados de nossos servidores.
                </p>
            </div>
            <div>
                <Button
                    onClick={() => console.log("clicou")}
                    text='Cancelar'
                    size='medium'
                    variant='greyDisable'
                ></Button>
                <Button
                    onClick={() => console.log("clicou")}
                    text='Sim, excluir anúncio'
                    size='medium'
                    variant='alert'
                ></Button>
            </div>
        </div>
    );
};
