import { RiCloseFill } from 'react-icons/ri'

function ModalContainer({ children, setShowModal, className, stopPropagation }) {

  const closeModal = (e) => {
    e.preventDefault()
    setShowModal(false)
  }

  return (
    <div className="flex flex-col justify-center items-center fixed z-40 top-0 bottom-0 left-0 right-0 bg-tri/80 bg-opacity-50">
      <div className={className} onClick={stopPropagation ? (e) => e.stopPropagation() : null}>
        {children}
      </div>
      <RiCloseFill className='w-10 h-10 mt-5' onClick={(e) => { closeModal(e) }}/>
    </div>
  )
}

export default ModalContainer