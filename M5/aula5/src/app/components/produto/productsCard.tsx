import styles from './product.module.css';
import Image from 'next/image';

const ProductCard = ({ 
  imageSrc, 
  imageAlt, 
  nome, 
  preco, 
  descricao,
  onAddToCart 
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ nome, preco, descricao, imageSrc });
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className={styles.productImage}
        />
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{nome}</h3>
        <p className={styles.productPrice}>R$ {preco}</p>
        <p className={styles.productDescription}>{descricao}</p>
        
        <button 
          className={styles.addToCartButton}
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;