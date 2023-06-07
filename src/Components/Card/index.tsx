const Card = () => {
    return (
        <li className='pt-2 px-2 sm:px-2 sm:py-2 list-none min-w-[312px] max-w-[300px] ml-1'>
            <div className='relative w-[296px] h-[160px]'>
                <img
                    className='border-2 hover:border-brand-1 w-[296px] h-[160px] object-cover'
                    src='../../../src/Assets/default-car.jpg'
                    alt=''
                />
                <div className='pl-2 pr-2 absolute top-4 left-4 bg-brand-1 text-white-fixed'>
                    <p>Ativo</p>
                </div>
            </div>
            <div className='mt-2 mb-4'>
                <h2 className='mb-2 text-grey-1'>Porsche</h2>
                <span className='text-grey-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique iure
                </span>
                <div className='flex items-center gap-2 mt-4 mb-4'>
                    <div className='w-10 h-10 bg-random-1 rounded-full flex items-center justify-center'>
                        <span className='text-white-fixed font-500'>C</span>
                    </div>
                    <span className='font-500 text-grey-2'>Camila</span>
                </div>
                <div className='flex justify-between'>
                    <div className='pt-2 pb-2 pl-2 pr-2 rounded-2 text-brand-1 bg-brand-4 font-500 flex items-center justify-center'>
                        <span>0 KM</span>
                    </div>
                    <div className='pt-2 pb-2 pl-2 pr-2 rounded-2 text-brand-1 bg-brand-4 font-500 flex items-center justify-center'>
                        <span>2019</span>
                    </div>
                    <div className='pt-2 pb-2 pl-2 pr-2 rounded-2 font-500 flex items-center justify-center'>
                        <span>R$ 00.000,00</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export { Card };
