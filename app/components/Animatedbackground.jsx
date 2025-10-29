

export default function AnimatedBackground({ children }) {
  return (
    <div className="relative h-full w-full overflow-hidden  bg-gray-950 text-white flex-col">
      <div
        className="
          absolute top-0 left-0 
          h-96 w-96 
          rounded-full 
          bg-purple-600 
          opacity-30 
          blur-3xl 
          filter 
          animate-flare 
          z-10
          overflow-hidden
        "
      />
      
      <div
        className="
          absolute bottom-0 right-0 
          h-72 w-72 
          rounded-full 
          bg-blue-500 
          opacity-30 
          blur-3xl 
          filter
          animate-flare [animation-delay:-4s] // หน่วงเวลาให้เคลื่อนไหวไม่พร้อมกัน
          z-10
          overflow-hidden
        "
      />

      <div className="relative grow z-20">
        {children} 
      </div> 
    </div>
  )
}