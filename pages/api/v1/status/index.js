function status(request, response) {
  response.status(200).json({ message: "Testing" });
}

export default status;
