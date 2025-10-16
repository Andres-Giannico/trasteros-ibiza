type Props = React.ComponentProps<"button"> &
  React.ComponentProps<"a"> & {
    variant?: "primary" | "outline" | "ghost";
  };

export default function Button({ variant = "primary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-transform active:scale-[.98] gap-2";
  const variants = {
    primary: "bg-[--color-brand] text-white hover:opacity-90 shadow-sm",
    outline: "border border-black/10 hover:bg-black/5",
    ghost: "hover:bg-black/5",
  } as const;

  const classes = `${base} px-6 py-3 ${variants[variant]} ${className || ""}`;

  if (props.href) {
    return <a className={classes} {...props} />;
  }

  return <button className={classes} {...props} />;
}


