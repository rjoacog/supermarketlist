export interface Props {
  setInput: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  items: string[];
}
