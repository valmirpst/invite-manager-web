import Image from 'next/image'
import cooper from '../../assets/medal-cooper.png'
import gold from '../../assets/medal-gold.png'
import silver from '../../assets/medal-silver.png'

export default function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5 md:mt-16">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Indique e ganhe
			</h2>

			<div className="space-y-4">
				<div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-start gap-2 px-7 py-6 relative">
					<Image
						src={gold}
						alt="gold medal"
						className="absolute top-0 right-8"
					/>

					<span className="text-sm text-gray-300 leading-none text-center">
						<span className="font-semibold">1°</span> | André Souza
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1.128
					</span>
				</div>
				<div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-start gap-2 px-7 py-6 relative">
					<Image
						src={silver}
						alt="silver medal"
						className="absolute top-0 right-8"
					/>

					<span className="text-sm text-gray-300 leading-none text-center">
						<span className="font-semibold">2°</span> | | Melissa Loures
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						928
					</span>
				</div>
				<div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-start gap-2 px-7 py-6 relative">
					<Image
						src={cooper}
						alt="cooper medal"
						className="absolute top-0 right-8"
					/>

					<span className="text-sm text-gray-300 leading-none text-center">
						<span className="font-semibold">3°</span> | Rodrigo Gonçalves
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						875
					</span>
				</div>
			</div>
		</div>
	)
}
