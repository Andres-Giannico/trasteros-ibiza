type Props = React.ComponentProps<"button"> &
  React.ComponentProps<"a"> & {
    variant?: "primary" | "outline" | "ghost";
  };

export default function Button({ variant = "primary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-transform active:scale-[.98] gap-2";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-sm",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  } as const;

  const classes = `${base} px-6 py-3 ${variants[variant]} ${className || ""}`;

  if (props.href) {
    return <a className={classes} {...props} />;
  }

  return <button className={classes} {...props} />;
}


