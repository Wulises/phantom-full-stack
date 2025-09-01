interface Props {
    title: string;
    description: string;
    code: string;
    tip?: string;
}

export default function SubtemaItem ({ title, description, code, tip }: Props) {

    return (

        <div className='bg-velvet border-l-4 border-HMorado p-10 rounded-xl shadow-[0_4px_30px_rgba(136,85,204,0.6)] font-body hover:scale-[1.01] transition-all duration-300 space-y-4 hover:ring-2 hover:ring-HMorado'>

            <h3 className='text-HMorado text-3xl font-bold tracking-wide'>
                {title}
            </h3>

            <p className='text-white/90 text-lg leading-relaxed'>
                {description}
            </p>

            <pre className='bg-black/90 text-green-400 p-6 rounded-md text-base overflow-auto border border-white/10 shadow-inner whitespace-pre font-mono'>
                <code className="font-mono">{code}</code>
            </pre>

            {tip && (

                <p className='italic text-KRojo text-lg'>
                    💡 {tip}
                </p>

            )}

        </div>

    )

}