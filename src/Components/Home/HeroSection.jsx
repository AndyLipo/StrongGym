import { HeroText } from './HeroText'
import { HeroContent } from './HeroContent'
export const HeroSection = () => {
    const { content } = HeroText
    const { mainTitle } = content
    return (
        <div >
            <HeroContent
                prefix={mainTitle.prefix}
                highlight={mainTitle.highlight}
                suffix={mainTitle.suffix}
                highlight2={mainTitle.highlight2}
                description={content.description}
                size="large"
            />
        </div>
    )
}
