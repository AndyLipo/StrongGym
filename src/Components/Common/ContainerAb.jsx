export const ContainerAb = ({ children, ClassName }) => {
    return (
        <div className={`flex justify-center items-center ${ClassName}`}>
            <div className='w-full max-w-4xl rounded-4xl overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30'>
                {children}
            </div>
        </div>
    )
}