"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  BarChart3,
  MessageSquare,
  Package,
  Smartphone,
  ArrowRight,
  Menu,
  X,
  Database,
  Zap,
  Clock,
} from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="text-stockbridge-orange">STOCK</span>
              <span className="text-stockbridge-black dark:text-white">BRIDGE</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#recursos" className="text-sm font-medium transition-colors hover:text-stockbridge-orange">
              Recursos
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium transition-colors hover:text-stockbridge-orange">
              Como Funciona
            </Link>
            <Link href="#precos" className="text-sm font-medium transition-colors hover:text-stockbridge-orange">
              Preços
            </Link>
            <Link href="#contato" className="text-sm font-medium transition-colors hover:text-stockbridge-orange">
              Contato
            </Link>
          </nav>
          <MobileNav />
          <div className="hidden md:flex gap-4">
            <Link href="#contato">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="#contato">
              <Button className="bg-stockbridge-orange hover:bg-amber-600">Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationSection />
        <PricingSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Abrir menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs border-l bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  <span className="text-stockbridge-orange">STOCK</span>
                  <span className="text-stockbridge-black dark:text-white">BRIDGE</span>
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Fechar menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              <Link
                href="#recursos"
                className="text-base font-medium transition-colors hover:text-stockbridge-orange"
                onClick={() => setIsOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="#como-funciona"
                className="text-base font-medium transition-colors hover:text-stockbridge-orange"
                onClick={() => setIsOpen(false)}
              >
                Como Funciona
              </Link>
              <Link
                href="#precos"
                className="text-base font-medium transition-colors hover:text-stockbridge-orange"
                onClick={() => setIsOpen(false)}
              >
                Preços
              </Link>
              <Link
                href="#contato"
                className="text-base font-medium transition-colors hover:text-stockbridge-orange"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="#contato" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link href="#contato" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-stockbridge-orange hover:bg-amber-600">Começar Grátis</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                Revolucione seu estoque
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Gerencie seu estoque diretamente pelo WhatsApp
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A Stockbridge conecta seu sistema de gerenciamento de estoque ao WhatsApp, permitindo controle total
                através de mensagens simples.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contato">
                <Button className="bg-stockbridge-orange hover:bg-amber-600">
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#como-funciona">
                <Button variant="outline">Saiba como funciona</Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Instalação simples</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Teste grátis</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Gerenciamento+de+Estoque"
                  alt="Sistema de gerenciamento de estoque"
                  width={500}
                  height={500}
                  className="object-contain rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Recursos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tudo que você precisa para gerenciar seu estoque
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa API oferece uma solução completa para conectar seu sistema de estoque ao WhatsApp, com recursos
              poderosos e fáceis de usar.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <Package className="h-6 w-6 text-stockbridge-orange" />
            </div>
            <h3 className="text-xl font-bold">Controle de Estoque</h3>
            <p className="text-center text-muted-foreground">
              Monitore níveis de estoque, receba alertas e gerencie produtos diretamente pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <BarChart3 className="h-6 w-6 text-stockbridge-orange" />
            </div>
            <h3 className="text-xl font-bold">Relatórios Detalhados</h3>
            <p className="text-center text-muted-foreground">
              Solicite e receba relatórios de vendas, estoque e desempenho através de mensagens simples.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <MessageSquare className="h-6 w-6 text-stockbridge-orange" />
            </div>
            <h3 className="text-xl font-bold">Notificações Automáticas</h3>
            <p className="text-center text-muted-foreground">
              Receba alertas automáticos sobre produtos com baixo estoque ou vendas excepcionais.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <Smartphone className="h-6 w-6 text-stockbridge-orange" />
            </div>
            <h3 className="text-xl font-bold">Acesso Móvel</h3>
            <p className="text-center text-muted-foreground">
              Gerencie seu negócio de qualquer lugar, usando apenas seu smartphone e o WhatsApp.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <Database className="h-6 w-6 text-stockbridge-orange" />
            </div>
            <h3 className="text-xl font-bold">Integração Simples</h3>
            <p className="text-center text-muted-foreground">
              Conecte-se facilmente com sistemas de ERP, e-commerce e plataformas de vendas existentes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <Zap className="h-6 w-6 text-stockbridge-orange" />
            </div>
            <h3 className="text-xl font-bold">Comandos Rápidos</h3>
            <p className="text-center text-muted-foreground">
              Use comandos simples para realizar ações complexas de gerenciamento de estoque.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Como Funciona</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simples de configurar, fácil de usar
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa API foi projetada para ser intuitiva e fácil de implementar, permitindo que você comece a usar
              rapidamente.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl font-bold text-stockbridge-orange">
              1
            </div>
            <h3 className="text-xl font-bold">Conecte sua API</h3>
            <p className="text-center text-muted-foreground">
              Integre nossa API ao seu sistema de gerenciamento de estoque existente com poucas linhas de código.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl font-bold text-stockbridge-orange">
              2
            </div>
            <h3 className="text-xl font-bold">Configure o WhatsApp</h3>
            <p className="text-center text-muted-foreground">
              Conecte sua conta do WhatsApp Business à nossa plataforma através de um processo simples de autenticação.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl font-bold text-stockbridge-orange">
              3
            </div>
            <h3 className="text-xl font-bold">Comece a Usar</h3>
            <p className="text-center text-muted-foreground">
              Envie comandos simples via WhatsApp para gerenciar seu estoque, verificar relatórios e receber
              notificações.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-lg border bg-[#f0f2f5] p-4 shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-2 border-b pb-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-stockbridge-orange flex items-center justify-center">
              <span className="text-white font-bold">SB</span>
            </div>
            <div className="flex-1">
              <p className="font-medium">Stockbridge</p>
              <p className="text-xs text-muted-foreground">online</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white p-3 text-sm shadow-sm">
                Olá! Sou o assistente da Stockbridge no WhatsApp. Como posso ajudar com seu estoque hoje?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-lg rounded-tr-none bg-[#dcf8c6] p-3 text-sm shadow-sm">
                Quero verificar o estoque do produto XYZ123
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white p-3 text-sm shadow-sm">
                Produto XYZ123 - Camiseta Azul M<br />
                Quantidade em estoque: 45 unidades
                <br />
                Último pedido: 10/04/2023
                <br />
                Status: Estoque adequado
                <div className="mt-1 text-xs text-gray-500">11:42 ✓✓</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-lg rounded-tr-none bg-[#dcf8c6] p-3 text-sm shadow-sm">
                Preciso fazer um pedido de mais 50 unidades
                <div className="mt-1 text-xs text-gray-500 text-right">11:43 ✓✓</div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white p-3 text-sm shadow-sm">
                Pedido registrado com sucesso!
                <br />
                50 unidades de XYZ123 - Camiseta Azul M<br />
                Pedido #87654
                <br />
                Previsão de entrega: 5 dias úteis
                <div className="mt-1 text-xs text-gray-500">11:43 ✓✓</div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 border-t pt-3">
            <div className="flex-1 rounded-full border bg-white px-4 py-2 text-sm text-gray-500">
              Digite uma mensagem...
            </div>
            <div className="h-10 w-10 rounded-full bg-stockbridge-orange flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                Integração Perfeita
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Conecte com seus sistemas existentes
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa API se integra facilmente com os principais Marketplaces e plataformas de e-commerce, permitindo
                sincronização automática do seu estoque.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-stockbridge-orange" />
                <span>Integração com principais Marketplaces</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-stockbridge-orange" />
                <span>Compatível com plataformas de e-commerce</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-stockbridge-orange" />
                <span>API própria e documentada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-stockbridge-orange" />
                <span>Webhooks para eventos em tempo real</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-stockbridge-orange" />
                <span>Sincronização automática de estoque</span>
              </li>
            </ul>
            <div>
              <Link href="#contato">
                <Button className="bg-stockbridge-orange hover:bg-amber-600">Ver Documentação da API</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex h-20 items-center justify-center rounded-lg border bg-white p-2 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Integração 1"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex h-20 items-center justify-center rounded-lg border bg-white p-2 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Integração 2"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex h-20 items-center justify-center rounded-lg border bg-white p-2 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Integração 3"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex h-20 items-center justify-center rounded-lg border bg-white p-2 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Integração 4"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex h-20 items-center justify-center rounded-lg border bg-white p-2 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Integração 5"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex h-20 items-center justify-center rounded-lg border bg-white p-2 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Integração 6"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="precos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Preços</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Planos para empresas de todos os tamanhos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escolha o plano que melhor se adapta às necessidades do seu negócio. Todos os planos incluem suporte
              técnico.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Plano Individual</h3>
              <p className="text-muted-foreground">Para profissionais e pequenas empresas</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">R$0,15</span>
              <span className="ml-1 text-muted-foreground">/mensagem</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Pague apenas pelo que usar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>1 número de WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Relatórios básicos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Suporte por email</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Sem compromisso mensal</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="#contato">
                <Button className="w-full bg-stockbridge-orange hover:bg-amber-600">Começar Agora</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-stockbridge-orange p-6 shadow-md">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">Recomendado</div>
              <h3 className="text-2xl font-bold">Plano Empresarial</h3>
              <p className="text-muted-foreground">Para empresas com alto volume</p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">R$599</span>
              <span className="ml-1 text-muted-foreground">/mês</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Mensagens ilimitadas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>10 números de WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Relatórios personalizados</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Suporte 24/7</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>API dedicada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span>Gerente de conta exclusivo</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="#contato">
                <Button className="w-full bg-stockbridge-orange hover:bg-amber-600">Fale com Vendas</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Depoimentos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">O que nossos clientes dizem</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja como a Stockbridge está transformando a gestão de estoque de empresas como a sua.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">Carlos Silva</h3>
                <p className="text-sm text-muted-foreground">Loja de Roupas</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                "A Stockbridge revolucionou nossa gestão de estoque. Agora consigo monitorar tudo pelo WhatsApp, mesmo
                quando estou fora da loja."
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">Ana Oliveira</h3>
                <p className="text-sm text-muted-foreground">Distribuidora</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                "Reduzimos em 70% o tempo gasto com controle de estoque. Os relatórios automáticos nos ajudam a tomar
                decisões mais rápidas."
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">Marcos Santos</h3>
                <p className="text-sm text-muted-foreground">Supermercado</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                "A integração com nosso sistema existente foi muito mais fácil do que esperávamos. Em uma semana já
                estávamos operando 100%."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Comece Agora</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para transformar seu gerenciamento de estoque?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Entre em contato conosco hoje mesmo e descubra como a Stockbridge pode ajudar seu negócio a crescer com
                uma gestão de estoque eficiente.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contato">
                <Button className="bg-stockbridge-orange hover:bg-amber-600">Agendar Demonstração</Button>
              </Link>
              <Link href="#contato">
                <Button variant="outline">Falar com Consultor</Button>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-stockbridge-orange" />
                <span className="text-sm text-muted-foreground">Resposta em até 24h</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-stockbridge-orange" />
                <span className="text-sm text-muted-foreground">Teste grátis por 14 dias</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-4 rounded-lg border bg-background p-6 shadow-md">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Entre em contato</h3>
                <p className="text-sm text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none">
                      Nome
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none">
                      Sobrenome
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Seu sobrenome"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-medium leading-none">
                    Telefone WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium leading-none">
                    Empresa
                  </label>
                  <input
                    id="company"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <Button type="submit" className="w-full bg-stockbridge-orange hover:bg-amber-600">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">
                <span className="text-stockbridge-orange">STOCK</span>
                <span className="text-stockbridge-black dark:text-white">BRIDGE</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando seu estoque ao WhatsApp para uma gestão mais eficiente e prática.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Produto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Stockbridge. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
