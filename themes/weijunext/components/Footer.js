import BLOG from '@/blog.config'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer className="relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6">
      {/* <DarkModeButton/> */}
      <i className="fas fa-copyright" /> {`${copyrightDate}`}{' '}
      <span>
        <i className="mx-1 animate-pulse fas fa-heart" />{' '}
        <a
          href={BLOG.LINK}
          className="underline font-bold  dark:text-gray-300 "
        >
          {BLOG.AUTHOR}
        </a>
        .<br />
        {BLOG.BEI_AN && (
          <>
            <i className="fas fa-shield-alt" />{' '}
            <a href="https://beian.miit.gov.cn/" className="mr-2">
              {BLOG.BEI_AN}
            </a>
            <br />
          </>
        )}
        <span className="hidden busuanzi_container_site_pv">
          <i className="fas fa-eye" />
          <span className="px-1 busuanzi_value_site_pv"> </span>{' '}
        </span>
        <span className="pl-2 hidden busuanzi_container_site_uv">
          <i className="fas fa-users" />{' '}
          <span className="px-1 busuanzi_value_site_uv"> </span>{' '}
        </span>
        <h1 className="text-xs pt-4 text-light-400 dark:text-gray-400">
          {title} | {BLOG.BIO}
        </h1>
        <p className="text-xs pt-2 text-light-500 dark:text-gray-500">
          {' '}
          <a
            href="https://www.xhs-download.online/"
            className="dark:text-gray-300"
          >
            小红书去水印图片视频下载
          </a>{' '}
          <a
            href="https://lastpass-generator.online/"
            className="dark:text-gray-300"
          >
            LastPass Password Generator
          </a>
          {' '}
          <a
            href="https://templatejp.online/"
            className="dark:text-gray-300"
          >
            無料のテンプレート
          </a>
          {' '}
          <a
            href="https://bottleneck-calculators.online/"
            className="dark:text-gray-300"
          >
            Bottleneck Calculator
          </a>
          {' '}
          <a
            href="https://geometrydashjp.online/"
            className="dark:text-gray-300"
          >
            ジオメトリーダッシュ
          </a>
        </p>
      </span>
      <br />
    </footer>
  )
}

export default Footer
