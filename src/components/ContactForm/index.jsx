import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../widgets/Input";
import { Select } from "../widgets/Select";
import { TextArea } from "../widgets/TextArea";
import { contactFormSchema } from "./contactForm.schema";
import { useState } from "react";
import { Button } from "../widgets/Button";

export const ContactForm = () => {
  const [ sentMessage, setSentMessage ] = useState(null);

  const { register, handleSubmit, formState: { errors} } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  const submit = payload => {
    setSentMessage(payload);
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Input id="contact-name" label="Nome" type="text" error={errors.name} required {...register("name")}/>
        <Input id="contact-email" label="E-Mail" type="email" error={errors.email} required {...register("email")}/>
        <Select id="contact-sector" label="Setor" error={errors.sector} required {...register("sector")}>
          <option value="administration">Administração</option>
          <option value="diplomacy">Diplomacia</option>
          <option value="maintenance">Manutenção</option>
          <option value="military">Militar</option>
        </Select>
        <TextArea id="contact-message" label="Mensagem" error={errors.message} required {...register("message")}/>
        <Button type="submit">Enviar Mensagem</Button>
      </form>
      {sentMessage && 
        <div>
          <h2>{sentMessage.name}</h2>
          <h3>E-mail: {sentMessage.email}</h3>
          <h3>Setor: {sentMessage.sector}</h3>
          <p>{sentMessage.message}</p>
          <h2>Mensagem enviada com sucesso!</h2>
        </div>}
    </>
  );
}