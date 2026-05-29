import styles from './input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

export default function Input({
  label,
  error,
  id,
  name,
  ...props
}: InputProps) {
  const inputId = id ?? name;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <input className={styles.input} id={inputId} name={name} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
