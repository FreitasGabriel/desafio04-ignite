import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';


import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (food: AddFood) => void;
  isOpen: boolean;
  editingFood: Food;
}

interface AddFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface Food {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export function ModalEditFood({ setIsOpen, handleUpdateFood, editingFood, isOpen }: ModalEditFoodProps) {

  const formRef = useRef<FormHandles>(null)
  async function handleSubmit(data: AddFood) {

    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
