import BLOG from '@/blog.config'
import LazyImage from '@/components/LazyImage'
import { useRouter } from 'next/router'
import Card from './Card'
import MenuGroupCard from './MenuGroupCard'
import SocialButton from './SocialButton'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { className, siteInfo } = props
  const router = useRouter()
  const handleMouseOver = e => {
    console.log(1)
    e.target.classList.add('rotate-start')
  }

  const handleMouseOut = e => {
    e.target.classList.remove('rotate-start')
  }

  return (
    <Card className={className}>
      <div
        className="justify-center items-center flex py-6 dark:text-gray-100  transform duration-200 cursor-pointer"
        onClick={() => {
          router.push('/')
        }}
      >
        <div
          className="w-32 h-32 rounded-full overflow-hidden inline-block"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <LazyImage
            src={siteInfo?.icon}
            alt={BLOG.AUTHOR}
            width={120}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="font-medium text-center text-xl pb-4">{BLOG.AUTHOR}</div>
      <div className="text-sm text-center">{BLOG.BIO}</div>
      <MenuGroupCard {...props} />
      <SocialButton />
    </Card>
  )
}
