import React from 'react';

interface TagButtonProps {
  buttonDisplayText: string;
}

export const TagButton: React.FC<TagButtonProps> = ({ buttonDisplayText }): JSX.Element => {
  return (
    <button type="button" className="btn btn-sm btn-outline-secondary">
      {buttonDisplayText}
    </button>
  );
};

export default TagButton;
