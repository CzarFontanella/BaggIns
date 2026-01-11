import { useState } from "react";
import { Mail, Lock, User, ShieldCheck } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não correspondem!");
      return;
    }
    if (!agreeTerms) {
      alert("Você deve aceitar os termos de serviço!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 py-8">
      <div className="w-full max-w-3xl">
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl py-4 px-8 shadow-2xl hover:border-lime-500/30 transition">
          {/* Header */}
          <div className="mb-4 text-center">
            <h1 className="text-3xl font-bold text-white mb-1">Cadastre-se</h1>
            <p className="text-slate-400">Crie sua conta BaggIns em segundos</p>
          </div>

          {/* Main Content - Grid */}
          <div className="grid md:grid-cols-7 items-start">
            {/* Form Section - Left */}
            <div className="md:col-span-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                      required
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-900/50 accent-lime-500 cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-slate-400 cursor-pointer"
                  >
                    Concordo com os{" "}
                    <a href="#" className="text-lime-500 hover:text-lime-400">
                      termos de serviço
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-lime-500 to-green-800 hover:from-lime-600 hover:to-green-700 text-white font-semibold py-2 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? "Criando conta..." : "Criar Conta"}
                </button>
              </form>

              {/* Login Link - Mobile */}
              <p className="text-center text-slate-400 mt-4 md:hidden">
                Já possui conta?{" "}
                <a
                  href="/login"
                  className="text-lime-500 hover:text-lime-400 font-semibold transition"
                >
                  Faça login
                </a>
              </p>
            </div>
            
            {/* Divider */}
            <div className="text-center col-span-1">
                <div className="h-46 w-px bg-slate-700 mx-auto mb-3"></div>
                <span className="text-sm text-slate-500 block">ou</span>
                <div className="h-46 w-px bg-slate-700 mx-auto mt-3"></div>
              </div>

            {/* Right Section - Google */}
            <div className="hidden h-100 items-center justify-center col-span-2 md:flex md:flex-col md:items-center md:gap-4 md:pt-2">
              {/* Google Signup Button */}
              {SignUpGoogleButton()}

              {/* Login Link - Desktop */}
              <p className="text-center text-slate-400 text-sm mt-4">
                Já possui conta?{" "}
                <a
                  href="/login"
                  className="text-lime-500 hover:text-lime-400 font-semibold transition"
                >
                  Faça login
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <p className="text-xs text-slate-500 text-center mt-4 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Suas informações estão seguras e criptografadas.
        </p>
      </div>
    </section>
  );
}
function SignUpGoogleButton() {
    return <button
        type="button"
        onClick={() => console.log("Google signup - em desenvolvimento")}
        className="flex flex-row items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition w-full"
    >
        <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4" />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853" />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05" />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335" />
        </svg>
        <span className="text-xs text-center leading-tight">
            Cadastrar com Google
        </span>
    </button>;
}

