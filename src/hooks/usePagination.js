import { useState, useMemo, useEffect } from 'react';

const usePagination = (data, itemsPerPage = 10, resetOnDataChange = true) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Se calculan valores derivados usando useMemo para optimizar rendimiento
  const paginationData = useMemo(() => {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return {
      currentItems,
      totalItems,
      totalPages,
      startIndex,
      endIndex: Math.min(endIndex, totalItems),
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };
  }, [data, currentPage, itemsPerPage]);

  // Reset de página cuando cambian los datos
  useEffect(() => {
    if (
      resetOnDataChange &&
      data.length > 0 &&
      currentPage > paginationData.totalPages
    ) {
      setCurrentPage(1);
    }
  }, [data.length, currentPage, paginationData.totalPages, resetOnDataChange]);

  // Funciones de navegación
  const goToPage = (page) => {
    if (page >= 1 && page <= paginationData.totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    if (paginationData.hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (paginationData.hasPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    ...paginationData,
    currentPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    resetPagination,
    setCurrentPage,
  };
};

export default usePagination;
