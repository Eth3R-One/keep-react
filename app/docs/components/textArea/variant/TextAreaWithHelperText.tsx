import { Label, Textarea } from '../../../../src'

const TextAreaWithHelperText = () => {
  return (
    <fieldset className="w-full space-y-1.5 p-2">
      <Label htmlFor="message">Your message*</Label>
      <Textarea id="message" placeholder="Write your message here" rows={8} />
      <p className="text-body-4 font-normal text-metal-300">Message must be a at least 100 words.</p>
    </fieldset>
  )
}

const TextAreaWithHelperTextCode = {
  'TextAreaComponent.tsx': `
import { Label, Textarea } from 'keep-react'

const TextAreaWithHelperText = () => {
  return (
    <fieldset className="space-y-1.5 p-2">
      <Label htmlFor="message">Your message*</Label>
      <Textarea id="message" placeholder="Write your message here" rows={8} />
      <p className="text-body-4 font-normal text-metal-300">Message must be a at least 100 words.</p>
    </fieldset>
  )
}
`,
}

export { TextAreaWithHelperText, TextAreaWithHelperTextCode }
