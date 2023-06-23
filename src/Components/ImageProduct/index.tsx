import { HeadingText } from "../../Style/HeadingText";

type iImageProps = {
  announcement_image: string | undefined;
};

export const ImageProduct = ({ announcement_image }: iImageProps) => {
  console.log(announcement_image);
  return (
    <div>
      {announcement_image === undefined ? (
        <HeadingText className="z-[2] text-white" tag="heading-7-600">
          Imagem principal não encontrada
        </HeadingText>
      ) : (
        <img
          className="object-cover rounded-2"
          src={announcement_image}
          alt=""
        />
      )}
    </div>
  );
};

// export const ImageProduct = () => {
//   return (
//     <div>
//       <img
//         className="object-cover rounded-2"
//         src="https://motortudo.com/wp-content/uploads/2022/11/Fusca-Azul-Laguna-3.webp"
//         alt=""
//       />
//       <h1>aqui</h1>
//     </div>
//   );
// };
