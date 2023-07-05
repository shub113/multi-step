export function Modal({ children }) {
    return (
        <div className='absolute z-10  '>
            <div className='fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity' />

            <div className='fixed inset-0 z-10'>
                <div className='flex min-h-full justify-center items-center p-4 text-center '>
                    <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[50vw] p-5 '>
                        <div className='bg-white'>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
