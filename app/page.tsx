export default function Home() {
  const date = new Date()
  const birthDate = new Date(2009, 8, 29);
  let age = date.getFullYear() - birthDate.getFullYear();
  const m = date.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && date.getDate() < birthDate.getDate())) {
      age--;
  }
  return (
    <div>
      <div>
        <h1 className='font-quenos text-4xl'>JUNSEOK LIM</h1>
        <p>임준석 / 15세 (만 {age}세)</p>
      </div>
    </div>
  )
}
