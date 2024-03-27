import { useCreateExcuse } from "../../Hooks/useCreateExcuse";
import { Input } from "../Input/Input";

import "./modal.css";

type ModalProps = {
  isOpen: boolean;
  setOpenModal: () => void;
};

export function ModalTest({ isOpen, setOpenModal }: ModalProps) {
  const { newExcuse, isLoading, isError, createExcuse, setNewExcuse } =
    useCreateExcuse();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("hadleInputCHange", e.target.value);
    setNewExcuse(e.target.value);
    console.log("newExcuse", newExcuse);
  };

  //console.log("excuse dans modal", newExcuse);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(event);
    //console.log("target", event.target);
    //console.log("value", event.target.value);

    // Vous pouvez implémenter la logique de validation ou d'enregistrement de l'excuse ici
    //createExcuse(e.target.value); // Appel à la fonction createExcuse
    console.log("Excuse submitted:", newExcuse);
    // Réinitialiser le champ d'excuse après la soumission
    //setExcuse("");
    // Fermer la modal
    //setOpenModal();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="overlay">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <button className="close" onClick={setOpenModal}>
          X
        </button>
        <h2 className="title-level2">Créez votre nouvelle excuse</h2>
        <Input handleChange={handleInputChange} name="excuse" />
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}