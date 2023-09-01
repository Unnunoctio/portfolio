
export const UserIcon = ({ style }: { style?: string }): React.ReactNode => {
  return (
    <svg
      className={style}
      xmlns='http://www.w3.org/2000/svg'
      width={20} height={20}
      viewBox='0 0 20 20'
    >
      <path d='M10 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-6.535 6.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1c.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z' />
    </svg>
  )
}
