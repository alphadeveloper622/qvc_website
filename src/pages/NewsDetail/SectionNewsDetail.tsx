import { NewsStoryCard } from '@/components/Card';
import { Section } from '@/layouts/Section';

type ISectionNewsDetailProps = {
  className?: string;
  date?: string;
  htmlContent?: string;
};
const SectionNewsDetail = (props: ISectionNewsDetailProps) => {
  const {
    date = 'Nov 1, 2023',
    htmlContent = '<p style="margin-bottom:15px" class="reveal fade-bottom">Lorem ipsum dolor sit amet consectetur. Enim suspendisse varius faucibus sit nunc egestas. Pellentesque tortor odio lobortis mauris et risus at. Mauris purus commodo tristique vitae. Consequat velit sed duis nulla eget. Etiam arcu ac dui et. Suspendisse amet est ullamcorper id phasellus purus hendrerit aenean nec. Ut sit viverra libero id. Diam amet mi ipsum tortor arcu maecenas erat. Tortor quis suscipit nibh ullamcorper scelerisque venenatis cursus iaculis tellus. Dignissim varius erat mauris amet tempor duis volutpat neque. Quam tortor consectetur egestas eget tincidunt varius. Imperdiet eu viverra odio lacus. Quis elit at lacus at nullam metus ornare proin lacinia.</p><p style="margin-bottom:15px"  class="reveal fade-bottom">Ante eu pellentesque ultrices iaculis. Magna dictum neque quis mattis. Ut ipsum facilisi ultricies sagittis eu nunc mauris. Suscipit pellentesque lorem massa vitae euismod molestie neque sollicitudin. Tortor aenean tincidunt tortor lorem a nec tincidunt tortor massa. Sodales sed arcu eget amet elit rhoncus. Sed et turpis turpis quis.</p><p style="margin-bottom:15px"  class="reveal fade-bottom">Pharetra a bibendum at augue integer. Diam fermentum etiam amet dui vitae senectus tortor gravida. Velit at sit ornare id. Neque facilisis ultricies facilisis erat volutpat sollicitudin non. Laoreet metus scelerisque dignissim sagittis morbi egestas sed. Risus sed imperdiet viverra massa eu diam aliquam. Tincidunt lobortis non est id consectetur amet amet. In a consequat id felis quis tellus mattis ullamcorper viverra. Arcu lectus lectus condimentum urna. Iaculis donec vitae ultricies eu euismod suspendisse.</p><p style="margin-bottom:15px"  class="reveal fade-bottom">Ac tristique egestas proin phasellus sapien. Pharetra congue non dictumst ullamcorper. Diam eget malesuada posuere ac nisi id leo id. Neque erat sapien diam eget. Augue leo consequat elementum risus vulputate tortor. Blandit cursus netus vivamus viverra posuere duis magna ut volutpat. Vulputate lectus mus convallis mauris. Interdum aliquet purus lobortis morbi sit volutpat fames. Nisl nibh posuere et sapien sapien ipsum viverra vel. Tellus purus eu porttitor lorem nulla pulvinar rutrum amet. Lacus lorem dolor leo quis etiam dolor sit. Est elementum mattis duis egestas netus dignissim mauris tincidunt neque. Tellus ante elit adipiscing et.</p><p style="margin-bottom:15px"  class="reveal fade-bottom">Nec viverra at pellentesque fames commodo. Sed amet consectetur risus amet. Porta id ac purus turpis sit lacus nunc. Ac augue ut ornare ut urna sit pretium posuere odio. Egestas pharetra id in eleifend. Mi in nunc et risus vestibulum volutpat quis. In feugiat sed lacus id enim dictumporta.</p>',
  } = props;
  return (
    <Section
      padding={`${props.className} px-[5vw] md:px-[min(7vw,100px)] pb-[130px]`}
    >
      <div className="w-full pt-[34px] md:flex md:justify-between">
        <div
          className={`w-full pb-[87px] md:w-2/3 md:border-r md:border-solid md:border-[#C8C8C8] md:pb-0 md:pr-[90px]`}
        >
          <p className={`poppins400 reveal fade-bottom mb-[12px] font-[16px]`}>
            {date}
          </p>
          <div
            className={`poppins400 font-[14px] leading-[22px]`}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
        </div>
        <div
          className={` w-full border-t border-solid border-[#C8C8C8] pt-[8px] md:w-1/3 md:border-0 md:pt-0 md:pl-[50px]`}
        >
          <p className={`poppins700 reveal fade-right mb-[12px] font-[22px]`}>
            RECENT NEWS
          </p>
          <div>
            <NewsStoryCard
              className={`reveal fade-right mb-[27px]`}
              summary="Lorem ipsum dolor sit amet consectetur. Malesuada amet."
              date=""
            />
            <NewsStoryCard
              className={`reveal fade-right mb-[27px]`}
              summary="Lorem ipsum dolor sit amet consectetur. Malesuada amet."
              date=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default SectionNewsDetail;
