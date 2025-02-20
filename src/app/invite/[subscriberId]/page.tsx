import Image from "next/image"
import Link from "next/link"
import logo from "../../../assets/logo.svg"
import InviteLinkInput from "./invite-link-input"
import Ranking from "./ranking"
import Stats from "./stats"

type InvitePageProps = {
  params: Promise<{ subscriberId: string }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { subscriberId } = await params

  const inviteLink = `http://localhost:8080/invites/${subscriberId}`

  return (
    <div className="min-h-dvh flex items-center justify-between flex-col gap-16 md:flex-row">
      <div className="flex flex-col gap-16 w-full max-w-[550px]">
        <Link href="/">
          <Image src={logo} alt="devstage" width={108.5} height={30} />
        </Link>

        <div className="space-y-10">
          <div className="space-y-2">
            <h1 className="text-5xl font-semibold font-heading leading-none">
              Inscrição confirmada!
            </h1>
            <p className="text-gray-300">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Indique e ganhe
              </h2>
              <p className="text-gray-300">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>

            <InviteLinkInput inviteLink={inviteLink} />

            <Stats subscriberId={subscriberId} />
          </div>
        </div>
      </div>

      <Ranking />
    </div>
  )
}
