import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import CONFIG from '../config'

const MenuGroupCard = props => {
  const { allNavPages, categoryOptions, tagOptions } = props
  const { locale } = useGlobal()
  // eslint-disable-next-line no-mixed-operators
  const archiveSlot = <div className="text-center">{allNavPages && allNavPages.length || 0}</div>
  const categorySlot = (
    <div className="text-center">{categoryOptions?.length}</div>
  )
  const tagSlot = <div className="text-center">{tagOptions?.length}</div>

  const links = [
    {
      name: locale.COMMON.ARTICLE,
      to: '/archive',
      slot: archiveSlot,
      show: CONFIG.MENU_ARCHIVE
    },
    {
      name: locale.COMMON.CATEGORY,
      to: '/category',
      slot: categorySlot,
      show: CONFIG.MENU_CATEGORY
    },
    {
      name: locale.COMMON.TAGS,
      to: '/tag',
      slot: tagSlot,
      show: CONFIG.MENU_TAG
    }
  ]

  return (
    <nav
      id="nav"
      className="leading-8 flex justify-center  dark:text-gray-200 w-full"
    >
      {links.map(link => {
        if (link.show) {
          return (
            <Link
              key={`${link.to}`}
              title={link.to}
              href={link.to}
              target={link?.to?.indexOf('http') === 0 ? '_blank' : '_self'}
              className={
                'py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer'
              }
            >
              <div className="w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600">
                <div className="text-center">{link.name}</div>
                <div className="text-center font-semibold">{link.slot}</div>
              </div>
            </Link>
          )
        } else {
          return null
        }
      })}
    </nav>
  )
}
export default MenuGroupCard
