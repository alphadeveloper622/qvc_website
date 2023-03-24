import { buttonClass } from './style';

type IButtonProps = {
  title: string;
  className?: string;
};
export default function Index(props: IButtonProps) {
  return (
    <button
      className={`${buttonClass} ${props.className ? props.className : ''}`}
    >
      {props.title}
    </button>
  );
}
