import { Banners } from "@/widgets/banners/ui/Banners";
import { Button, CountdownTimer, Typography } from "@/shared/ui";
import { ProgressBar } from "@/shared/ui";
import { casesMock } from "@/mocks/cases";

import "./styles.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ padding: "0 1rem 1rem" }}>
      <Banners />

      <div className="boxes__section">
        <div className="boxes__section__inner_container">
          <div
            className="boxes__section__inner"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <Image src="/icons/info.svg" alt="info" width={24} height={24} />
            Что это такое?
          </div>
          <div className="boxes__section__inner_mobile">
            <Image src="/icons/info.svg" alt="info" width={20} height={20} />
          </div>
          <div className="boxes__section__heading">
            <h1 className="title">БЕСПЛАТНЫЕ КЕЙСЫ</h1>
            <div className="description">
              Вы пополнили баланс на <span>$ 200</span>
            </div>
          </div>
          <CountdownTimer />
        </div>

        <div className="boxes__section__progress-bar">
          <ProgressBar
            totalSteps={6}
            completedSteps={2}
            iconSize={44}
            className="my-progress-bar"
          />
        </div>

        <div className="boxes__section__list">
          {casesMock
            .filter((caseItem) => caseItem.isFree)
            .map((caseItem) => (
              <div key={caseItem.id} className="boxesListItem">
                <div className="boxesListItem__case">
                  <Image
                    className="caseImage"
                    src={`/cases/${caseItem.image}`}
                    alt={caseItem.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="boxesListItem__footer">
                  <Typography
                    className="caseName"
                    size="h6"
                    color={caseItem.isAvailable ? "white" : "secondary"}
                  >
                    {caseItem.name}
                  </Typography>
                  {caseItem.isFree ? (
                    <Button className="w-1/3" size="medium">
                      <Image
                        src="/icons/key.svg"
                        alt="buy"
                        width={24}
                        height={24}
                      />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="medium"
                      className="button_budget"
                    >
                      <Typography size="h6" color={"secondary"} weight="normal">
                        {caseItem.price} ₽
                      </Typography>
                    </Button>
                  )}
                </div>
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
          {casesMock
            .filter((caseItem) => caseItem.price >= 2000)
            .map((caseItem) => (
              <div key={caseItem.id} className="boxesListItem">
                <div className="boxesListItem__case">
                  <Image
                    className="caseImage"
                    src={`/cases/${caseItem.image}`}
                    alt={caseItem.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="boxesListItem__footer">
                  <Typography
                    className="caseName"
                    size="h6"
                    color={caseItem.isAvailable ? "white" : "secondary"}
                  >
                    {caseItem.name}
                  </Typography>

                  <Button
                    variant="outline"
                    size="medium"
                    className="button_budget"
                  >
                    <Typography size="h6" color={"secondary"} weight="normal">
                      {caseItem.price} ₽
                    </Typography>
                  </Button>
                </div>
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
          {casesMock
            .filter((caseItem) => caseItem.price < 2000)
            .map((caseItem) => (
              <div key={caseItem.id} className="boxesListItem">
                <div className="boxesListItem__case">
                  <Image
                    className="caseImage"
                    src={`/cases/${caseItem.image}`}
                    alt={caseItem.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="boxesListItem__footer">
                  <Typography
                    className="caseName"
                    size="h6"
                    color={caseItem.isAvailable ? "white" : "secondary"}
                  >
                    {caseItem.name}
                  </Typography>

                  <Button
                    variant="outline"
                    size="medium"
                    className="button_budget"
                  >
                    <Typography size="h6" color={"secondary"} weight="normal">
                      {caseItem.price} ₽
                    </Typography>
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
