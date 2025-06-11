import React from 'react';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  showInfo = true,
  maxVisiblePages = 5,
  className = '',
}) => {
  // Calcular datos de paginación
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Generar array de números de página para mostrar
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para mostrar páginas con puntos suspensivos
      if (currentPage <= 3) {
        // Mostrar las primeras páginas
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Mostrar las últimas páginas
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Mostrar páginas alrededor de la actual
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  
  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // No mostrar paginación si hay una página o menos
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* Información de paginación */}
      {showInfo && (
        <div className="flex justify-center">
          <p className="text-sm text-gray-500">
            Mostrando {startIndex + 1}-{endIndex} de {totalItems} elementos
          </p>
        </div>
      )}

      {/* Controles de paginación */}
      <div className="flex">
        {/* Botón Anterior */}
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize rounded-md rtl:-scale-x-100 ${
            currentPage === 1
              ? 'bg-white cursor-not-allowed'
              : 'bg-white transition-colors duration-300 transform hover:bg-blue-500 hover:text-white'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Números de página */}
        {generatePageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-4 py-2 mx-1 text-gray-700 bg-white rounded-md">
                ...
              </span>
            ) : (
              <button
                onClick={() => goToPage(page)}
                className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 bg-white hover:bg-blue-500 hover:text-white'
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}

        {/* Botón Siguiente */}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md rtl:-scale-x-100 ${
            currentPage === totalPages
              ? 'bg-white cursor-not-allowed text-gray-500'
              : 'bg-white hover:bg-blue-500 hover:text-white'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
