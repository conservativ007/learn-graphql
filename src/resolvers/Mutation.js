import { v4 } from 'uuid';

export const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;

    let newCategory = {
      id: v4(),
      name: name,
    };

    categories.push(newCategory);

    return newCategory;
  },
};
