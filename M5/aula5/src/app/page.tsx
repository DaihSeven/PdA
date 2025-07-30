import ProductCard from './components/produto/productsCard';
import styles from './page.module.css';

export default function Home() {
  const produtos = [
    {
      id: 1,
      imageSrc: './images/produto1.png',
      imageAlt: 'Smartphone Galaxy',
      nome: 'Smartphone Galaxy',
      preco: '899,99',
      descricao: 'Smartphone com tela de 6.1 polegadas, câmera tripla e bateria de longa duração.'
    },
    {
      id: 2,
      imageSrc: './images/produto2.png',
      imageAlt: 'Notebook Gamer',
      nome: 'Notebook Gamer',
      preco: '2.499,00',
      descricao: 'Notebook com processador Intel i7, placa de vídeo RTX 3060 e 16GB RAM.'
    },
    {
      id: 3,
      imageSrc: './images/produto3.png',
      imageAlt: 'Fone Bluetooth',
      nome: 'Fone Bluetooth',
      preco: '299,90',
      descricao: 'Fone de ouvido sem fio com cancelamento de ruído e 30h de bateria.'
    }
  ];

  const handleAddToCart = (produto: any) => {
    console.log('Produto adicionado ao carrinho:', produto);
    alert(`${produto.nome} foi adicionado ao carrinho!`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Loja de Produtos</h1>
        <p className={styles.subtitle}>Confira nossa seleção especial</p>
        
        <div className={styles.productsGrid}>
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              imageSrc={produto.imageSrc}
              imageAlt={produto.imageAlt}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}