import { Banners } from "@/widgets/banners/ui/Banners";
import "./styles.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banners classname="container mx-auto mt-[1rem] " />

      <div className="boxes__section">
        <div className="boxes__section__heading">
          <h1 className="title">БЕСПЛАТНЫЕ КЕЙСЫ</h1>
          <div className="description">
            Вы пополнили баланс на <span>$ 200</span>
          </div>
        </div>

        <div className="boxes__section__list">
          {new Array(6).fill(0).map((_, i) => (
            <div key={i} className="boxesListItem">
              <div className="boxesListItem__case">
                <Image
                  className="caseImage"
                  src="/cases/1.png"
                  alt="case"
                  width={300}
                  height={300}
                />
              </div>
              <div className="boxesListItem__footer"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="boxes__section">
        <div className="boxes__section__heading">
          <h1 className="title">РАРИТЕТНЫЕ КЕЙСЫ</h1>
          <div className="description">_</div>
        </div>

        <div className="boxes__section__list">
          {new Array(10).fill(0).map((_, i) => (
            <div key={i} className="boxesListItem">
              <div className="boxesListItem__case">
                <Image
                  className="caseImage"
                  src="https://api.csfade.gg/boxes/76cb2310-1044-4e93-8cbe-23a9b756949b.webp"
                  alt="case"
                  width={300}
                  height={300}
                />
              </div>
              <div className="boxesListItem__footer"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="boxes__section">
        <div className="boxes__section__heading">
          <h1 className="title">БЮДЖЕТНЫЕ КЕЙСЫ</h1>
          <div className="description">_</div>
        </div>

        <div className="boxes__section__list">
          {new Array(4).fill(0).map((_, i) => (
            <div key={i} className="boxesListItem">
              <div className="boxesListItem__case">
                <Image
                  className="caseImage"
                  src="https://api.csfade.gg/boxes/76cb2310-1044-4e93-8cbe-23a9b756949b.webp"
                  alt="case"
                  width={300}
                  height={300}
                />
              </div>
              <div className="boxesListItem__footer"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
