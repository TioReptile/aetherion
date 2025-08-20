import React, { useState, useEffect } from 'react';
import { BarChart3, Users, PiggyBank, Mail, Gem } from 'lucide-react';

// Main App Component
const App = () => {
  return (
    <div className="bg-gray-950 text-gray-100 font-sans min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <MonetizationSection />
        <FinancialSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => (
  <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Gem className="text-purple-400 w-8 h-8" />
        <span className="text-2xl font-bold text-white tracking-tight">Perfect World Investors</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-400 font-medium">
        <a href="#proposta" className="hover:text-purple-400 transition-colors">A Proposta</a>
        <a href="#monetizacao" className="hover:text-purple-400 transition-colors">Monetização</a>
        <a href="#financas" className="hover:text-purple-400 transition-colors">Finanças</a>
        <a href="#equipe" className="hover:text-purple-400 transition-colors">A Equipe</a>
        <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
      </nav>
      <button className="md:hidden text-white focus:outline-none">
        {/* Menu Icon - Not implemented for this static demo */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <section className="relative text-center py-20 md:py-32">
    <div className="absolute inset-0 bg-hero-bg opacity-30"></div>
    <div className="relative z-10 container mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        O Futuro do Perfect World<br/> Está em Nossas Mãos.
      </h1>
      <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        Uma oportunidade única de investimento em um servidor de Perfect World
        com infraestrutura profissional, foco em monetização sustentável e uma comunidade próspera.
      </p>
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="#proposta" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
          Ver Proposta
        </a>
        <a href="#contato" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
          Entre em Contato
        </a>
      </div>
    </div>
  </section>
);

// Mission/Vision Section
const MissionSection = () => (
  <section id="proposta" className="py-16 md:py-24 bg-gray-900 rounded-2xl mx-4 my-8 md:mx-auto max-w-7xl">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa Visão: Um Servidor Incomparável</h2>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        Construímos uma experiência de Perfect World que vai além de um simples servidor.
        Nosso foco é a estabilidade, o crescimento da comunidade e a criação de valor
        através de um modelo de negócio transparente e lucrativo.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-purple-400">Infraestrutura Profissional</h3>
          <p className="mt-3 text-gray-300">
            Utilizamos a melhor tecnologia de ponta para garantir 99,9% de
            uptime, segurança e performance impecável para todos os jogadores.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-purple-400">Monetização Estratégica</h3>
          <p className="mt-3 text-gray-300">
            Focamos em itens cosméticos e de conveniência, mantendo o
            balanceamento do jogo e a satisfação dos jogadores.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-purple-400">Comunidade Engajada</h3>
          <p className="mt-3 text-gray-300">
            Nossa equipe de gerenciamento de comunidade é dedicada
            a criar eventos, suporte e um ambiente positivo.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Monetization Section Component
const MonetizationSection = () => (
  <section id="monetizacao" className="py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center space-x-3">
        <PiggyBank className="text-purple-400 w-10 h-10" />
        <span>Estratégia de Monetização e Crescimento</span>
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        Nosso modelo de negócio é baseado em pilares de receita diversificados,
        garantindo um fluxo de caixa estável e previsível.
      </p>
      <div className="grid lg:grid-cols-2 gap-8 mt-12 text-left">
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
          <h3 className="text-2xl font-semibold text-purple-400">Modelo "Free-to-Play, Pay-for-Fun"</h3>
          <ul className="mt-4 space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>
                **Venda de Itens Cosméticos:** Roupas, montarias e voos exclusivos.
                Nossos artistas criam itens que a comunidade deseja.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>
                **Itens de Conveniência:** Pacotes de buffs, teletransportes, itens para
                acelerar a progressão de forma não-essencial.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>
                **Passe de Batalha (Battle Pass):** Um sistema sazonal que oferece
                recompensas exclusivas e mantém os jogadores engajados.
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
          <h3 className="text-2xl font-semibold text-purple-400">Projeções de Crescimento</h3>
          <p className="mt-4 text-gray-300">
            Com um investimento de **R$ 50.000**, projetamos as seguintes
            métricas de crescimento nos primeiros 12 meses:
          </p>
          <ul className="mt-4 space-y-4 text-gray-300">
            <li className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
              <span>Usuários Ativos Mensais (MAU):</span>
              <span className="font-bold text-white">5.000+</span>
            </li>
            <li className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
              <span>ARPU (Receita Média por Usuário):</span>
              <span className="font-bold text-white">R$ 15,00 - R$ 20,00</span>
            </li>
            <li className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
              <span>Taxa de Conversão para Pagantes:</span>
              <span className="font-bold text-white">10% - 15%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Financial Projections Section
const FinancialSection = () => (
  <section id="financas" className="py-16 md:py-24 bg-gray-900 rounded-2xl mx-4 my-8 md:mx-auto max-w-7xl">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center space-x-3">
        <BarChart3 className="text-purple-400 w-10 h-10" />
        <span>Projeções Financeiras</span>
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        Nossas projeções indicam uma rentabilidade sólida e um retorno
        atraente sobre o investimento.
      </p>
      <div className="mt-12 overflow-x-auto">
        <table className="min-w-full bg-gray-900 rounded-xl shadow-lg border border-gray-800 text-left">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="px-6 py-4 font-bold text-purple-400 rounded-tl-xl">Métrica</th>
              <th className="px-6 py-4 font-bold text-purple-400">Ano 1</th>
              <th className="px-6 py-4 font-bold text-purple-400">Ano 2</th>
              <th className="px-6 py-4 font-bold text-purple-400 rounded-tr-xl">Ano 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-t border-gray-700 font-semibold text-white">Receita Projetada</td>
              <td className="px-6 py-4 border-t border-gray-700 text-gray-300">R$ 200.000</td>
              <td className="px-6 py-4 border-t border-gray-700 text-gray-300">R$ 550.000</td>
              <td className="px-6 py-4 border-t border-gray-700 text-gray-300">R$ 1.200.000</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-t border-gray-700 font-semibold text-white">Custos Operacionais</td>
              <td className="px-6 py-4 border-t border-gray-700 text-gray-300">R$ 80.000</td>
              <td className="px-6 py-4 border-t border-gray-700 text-gray-300">R$ 150.000</td>
              <td className="px-6 py-4 border-t border-gray-700 text-gray-300">R$ 300.000</td>
            </tr>
            <tr className="bg-gray-800">
              <td className="px-6 py-4 border-t border-gray-700 font-extrabold text-white">Lucro Líquido</td>
              <td className="px-6 py-4 border-t border-gray-700 font-bold text-green-400">R$ 120.000</td>
              <td className="px-6 py-4 border-t border-gray-700 font-bold text-green-400">R$ 400.000</td>
              <td className="px-6 py-4 border-t border-gray-700 font-bold text-green-400">R$ 900.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// Team Section Component
const TeamSection = () => (
  <section id="equipe" className="py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center space-x-3">
        <Users className="text-purple-400 w-10 h-10" />
        <span>A Equipe por Trás do Projeto</span>
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        Somos um time apaixonado e experiente, com a visão de levar este servidor
        ao próximo nível.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <TeamMember
          name="Seu Nome"
          role="Fundador & Desenvolvedor Principal"
          bio="Especialista em desenvolvimento de servidores de jogos e arquitetura de sistemas. Com anos de experiência em Perfect World, conhece a fundo a comunidade e suas necessidades."
        />
        <TeamMember
          name="Nome do Sócio"
          role="CFO & Estratégia de Negócios"
          bio="Profissional com experiência em gestão financeira e análise de mercado. Responsável por garantir a rentabilidade e a sustentabilidade do negócio a longo prazo."
        />
        <TeamMember
          name="Nome do Designer"
          role="Gerente de Comunidade & Marketing"
          bio="Especialista em engajamento de comunidades online e marketing digital. Responsável por construir e manter uma comunidade ativa e leal."
        />
      </div>
    </div>
  </section>
);

const TeamMember = ({ name, role, bio }) => (
  <div className="bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-800 transform hover:scale-105 transition-transform">
    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-gray-600 mb-4">
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-purple-400 text-sm mt-1">{role}</p>
    <p className="mt-4 text-gray-300">{bio}</p>
  </div>
);

// Contact Section Component
const ContactSection = () => (
  <section id="contato" className="py-16 md:py-24 bg-gray-950">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center flex items-center justify-center space-x-3">
        <Mail className="text-purple-400 w-10 h-10" />
        <span>Pronto para Investir no Futuro?</span>
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto text-center">
        Preencha o formulário abaixo para receber nossa proposta de investimento
        completa e agendar uma reunião.
      </p>
      <form className="mt-12 max-w-lg mx-auto bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Nome Completo</label>
          <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors text-white" placeholder="Seu nome" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">E-mail</label>
          <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors text-white" placeholder="seuemail@exemplo.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Mensagem (opcional)</label>
          <textarea id="message" rows="4" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors text-white" placeholder="Fale-nos sobre seu interesse..."></textarea>
        </div>
        <button type="submit" className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors transform hover:scale-105">
          Enviar Proposta
        </button>
      </form>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
    <div className="container mx-auto px-4">
      © 2024 Perfect World Servidor. Todos os direitos reservados.
    </div>
  </footer>
);

export default App;
