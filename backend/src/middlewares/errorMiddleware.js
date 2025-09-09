export default (error, req, res, next) => {
  console.error('Erro capturado: ', error.message);

  const status = error.status || 500;

  res.status(status).json({
    error: {
      message: error.message || 'Erro interno no servidor',
      status: status,
      route: req.originalUrl,
      method: req.method
    },
  });
};
