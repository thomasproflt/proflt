import React from "react";

const AuthForm = ({
  showNameField = true, // Novo: controla a exibição do campo "Nome Completo"
  fullName,
  setFullName,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  error,
  buttonText,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {/* Campo "Nome Completo" (apenas se showNameField=true) */}
      {showNameField && (
        <input
          type="text"
          placeholder="Nome Completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      )}

      {/* Campos fixos (E-mail e Senha) */}
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Mensagem de erro e botão */}
      {error && <p className="error">{error}</p>}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AuthForm;