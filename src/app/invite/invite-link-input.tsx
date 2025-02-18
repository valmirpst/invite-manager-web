'use client'

import Button from '@/components/button'
import { Input } from '@/components/input'
import { Copy, Link } from 'lucide-react'

type InviteLinkInputProps = {
	inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
	function copyInviteLink() {
		navigator.clipboard.writeText(inviteLink)
		alert('Link de convite copiado para a área de transferência!')
	}

	return (
		<Input.Root>
			<Input.Icon>
				<Link size={20} />
			</Input.Icon>
			<Input.Field readOnly defaultValue={inviteLink} />
			<Button
				type="button"
				onClick={copyInviteLink}
				variant="icon"
				className="-mr-2"
			>
				<Copy size={20} />
			</Button>
		</Input.Root>
	)
}
