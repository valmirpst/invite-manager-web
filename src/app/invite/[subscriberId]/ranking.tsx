import { getRanking } from "@/http/api"
import Image from "next/image"
import cooper from "../../../assets/medal-cooper.png"
import gold from "../../../assets/medal-gold.png"
import silver from "../../../assets/medal-silver.png"

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5 md:mt-16">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Indique e ganhe
      </h2>

      <div className="space-y-4">
        {ranking.slice(0, 3).map((subscriber, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={subscriber.id}
              className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-start gap-2 px-7 py-6 relative"
            >
              <span className="text-sm text-gray-300 leading-none text-center">
                <span className="font-semibold">{rankingPosition}°</span> |{" "}
                {subscriber.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {subscriber.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  alt="gold medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={silver}
                  alt="gold medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={cooper}
                  alt="gold medal"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
        {/* <div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-start gap-2 px-7 py-6 relative">
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
        </div> */}
      </div>
    </div>
  )
}
