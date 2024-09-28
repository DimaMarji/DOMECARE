  // Handle parent checkbox toggle (check/uncheck all children)
  export const handleParentToggle = (parentId, childrenIds, isChecked,checkedItems) => {
    const newCheckedItems = { ...checkedItems };

    if (isChecked) {
      // Check parent and all its children
      newCheckedItems[parentId] = childrenIds;
    } else {
      // Uncheck parent and all its children
      delete newCheckedItems[parentId];
    }
    return newCheckedItems
  };

  // Handle child checkbox toggle (update parent based on children)
  export const handleChildToggle = (parentId, childId, isChecked,checkedItems) => {
    const newCheckedItems = { ...checkedItems };

    // Get the currently checked children for the parent
    const currentChildren = newCheckedItems[parentId] || [];

    if (isChecked) {
      // Add child to the parent's checked items
      newCheckedItems[parentId] = [...currentChildren, childId];
    } else {
      // Remove child from the parent's checked items
      newCheckedItems[parentId] = currentChildren.filter((id) => id !== childId);
      if (newCheckedItems[parentId].length === 0) {
        delete newCheckedItems[parentId]; // If no children are checked, remove parent entry
      }
    }
    return newCheckedItems
  };

  // Utility function to check if a parent is indeterminate
  export const isParentIndeterminate = (parentId, childrenIds,checkedItems) => {
    const checkedChildren = checkedItems[parentId] || [];
    return (
      checkedChildren.length > 0 && checkedChildren.length < childrenIds.length
    );
  };

  // Utility function to check if all children are checked
  export const isParentChecked = (parentId, childrenIds,checkedItems) => {
    const checkedChildren = checkedItems[parentId] || [];
    return checkedChildren.length === childrenIds.length;
  };