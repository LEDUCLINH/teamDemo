import Image from 'next/image'

import { useCity } from '../../../utils/city/city-context'
import Link from '../link/link'
import styles from './category-card.module.scss'

type CategoryCardProps = {
  category: {
    id: number
    name: string
    sub_categories: {
      id: number
    }[]
  }
}

function CategoryCard({ category }: CategoryCardProps) {
  const { zipAndCity } = useCity()

  return (
    <Link
      className={styles.categoryCard}
      href={
        zipAndCity
          ? `/posts/city-${
              zipAndCity.city.id
            }/selected-sub-categories-${category.sub_categories
              .map((sc) => Number(sc.id))
              .sort()
              .join('-')}/q-/page-1/`
          : '/'
      }
      variant="body2"
    >
      <Image
        className={styles.categoryCard__icon}
        alt={`${category.name} Icon`}
        src={`https://uploads.1stkare.com/category-icons/${category.id}.svg`}
        layout="fixed"
        width={48}
        height={48}
        sizes="48px"
        priority
      />

      <span className={styles.categoryCard__name}>{category.name}</span>
    </Link>
  )
}

export default CategoryCard
