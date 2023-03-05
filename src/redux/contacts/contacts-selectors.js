export const getAllContacts = ({contacts}) => contacts.items;
export const getFilteredContacts = ({ contacts = [], filter }) => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return result;
  };