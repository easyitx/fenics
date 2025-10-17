"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { BalanceSlider } from "@/widgets/balance";
import { IBalance } from "@/entities/balance";
import { ToggleButtons } from "@/components/ui/ToggleButtons";
import { MultiplierButtons } from "@/components/ui/MultiplierButtons";
import { Typography } from "@/shared/ui/Typography";
import { user, mockSkins, mockSkinsForUpgrade } from "@/mocks/profile";

interface SkinItem {
  id: string;
  marketName: string;
  weaponName: string;
  shortName: string;
  itemImage: string;
  rarity: string;
  price: number;
  isHighlighted?: boolean;
}
import { Button } from "@/shared/ui/Button";
import { SkinCard } from "@/entities/skin";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { UnstyledButton } from "@/shared/ui/Button";
import { cn } from "@/shared/lib/utils";
import { CircularProgressBar } from "@/shared/ui/CircularProgressBar";
export default function Upgrades() {
  const [activeTab, setActiveTab] = useState<"skin" | "balance">("balance");
  const [mobileActiveTab, setMobileActiveTab] = useState<"inventory" | "skins">(
    "inventory"
  );
  const [mobileInventorySkin, setMobileInventorySkin] =
    useState<SkinItem | null>(null);
  const [mobileUpgradeSkin, setMobileUpgradeSkin] = useState<SkinItem | null>(
    null
  );
  const [activeMultiplier, setActiveMultiplier] = useState<number>(1.5);
  const [balance, setBalance] = useState<IBalance>({
    current: 12,
    total: 24,
    currency: "$",
  });
  const [mySkin, setMySkin] = useState<SkinItem | null>(null);
  const [skin, setSkin] = useState<SkinItem | null>(null);
  const [upgradeChance, setUpgradeChance] = useState<number>(75);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [upgradeResult, setUpgradeResult] = useState<boolean | null>(null);
  const [resetProgressColors, setResetProgressColors] =
    useState<boolean>(false);
  const [isPulsing, setIsPulsing] = useState<boolean>(false);

  const handleBalanceChange = (newValue: number) => {
    setBalance((prev) => ({
      ...prev,
      current: newValue,
    }));
  };

  const handleTabChange = (tab: "skin" | "balance") => {
    setActiveTab(tab);
  };

  const handleMobileTabChange = (tab: "inventory" | "skins") => {
    setMobileActiveTab(tab);
  };

  const handleMobileSkinClick = (skinItem: SkinItem) => {
    if (mobileActiveTab === "inventory") {
      setMobileInventorySkin(skinItem);
      handleMySkinClick(skinItem);
    } else {
      setMobileUpgradeSkin(skinItem);
      handleSkinClick(skinItem);
    }
  };

  const handleRemoveInventorySkin = () => {
    setMobileInventorySkin(null);
    setMySkin(null);
    setUpgradeResult(null);
    setIsSpinning(false);
    setIsPulsing(false);
    setResetProgressColors(true);
    setTimeout(() => setResetProgressColors(false), 100);
  };

  const handleRemoveUpgradeSkin = () => {
    setMobileUpgradeSkin(null);
    setSkin(null);
    setUpgradeResult(null);
    setIsSpinning(false);
    setIsPulsing(false);
    setResetProgressColors(true);
    setTimeout(() => setResetProgressColors(false), 100);
  };

  const handleMultiplierChange = (multiplier: number) => {
    setActiveMultiplier(multiplier);
  };

  const handleMySkinClick = (skinItem: SkinItem) => {
    setMySkin(skinItem);
    setUpgradeResult(null);
    setIsPulsing(false);
    setResetProgressColors(true);
    setTimeout(() => setResetProgressColors(false), 100);
  };

  const handleSkinClick = (skinItem: SkinItem) => {
    setSkin(skinItem);
    setUpgradeResult(null);
    setIsPulsing(false);
    if (mySkin && skinItem) {
      const newChance = Math.floor(Math.random() * 50) + 50;
      setUpgradeChance(newChance);
    }
  };

  const handleUpgrade = () => {
    if (mySkin && skin && !isSpinning) {
      setIsSpinning(true);
      setUpgradeResult(null);
    }
  };

  const handleSpinComplete = (isWin: boolean) => {
    setIsSpinning(false);
    setUpgradeResult(isWin);
    setIsPulsing(true);

    setTimeout(() => {
      setIsPulsing(false);
    }, 3000);
  };

  const getInitialClassName = () => {
    if (upgradeResult === null) {
      return skin || mySkin ? styles.initialAdded : styles.initial;
    }
    if (upgradeResult === true) {
      return styles.initialWon;
    }
    return styles.initialLosed;
  };

  const getInitialMobileClassName = () => {
    if (upgradeResult === null) {
      return mobileInventorySkin || mobileUpgradeSkin
        ? styles.initialAddedMob
        : styles.initialMobileImg;
    }
    if (upgradeResult === true) {
      return styles.initialWonMob;
    }
    return styles.initialLosedMob;
  };

  const getSkinItemClassName = () => {
    if (upgradeResult === null) {
      return skin ? styles.upgradeSkin : styles.upgradeItem;
    }
    if (upgradeResult === true) {
      return styles.skinWon;
    }
    return styles.skinLosed;
  };

  const getZonePulseClassName = () => {
    if (!isPulsing) return "";
    if (upgradeResult === true) return styles.zonePulseWin;
    if (upgradeResult === false) return styles.zonePulseLose;
    return styles.zonePulse;
  };

  const getBlurImageSrc = () => {
    if (upgradeResult === null && (skin || mySkin)) {
      return "/upgrades/blure.svg";
    }
    if (upgradeResult === false) {
      return "/upgrades/blureLosed.svg";
    }
    if (upgradeResult === true) {
      return "/upgrades/blureWon.svg";
    }
    return null;
  };

  const getItemMobClassName = () => {
    if (upgradeResult === null && (mobileInventorySkin || mobileUpgradeSkin)) {
      return styles.itemMobAdded;
    }
    if (upgradeResult === true) {
      return styles.itemMobWon;
    }
    if (upgradeResult === false) {
      return styles.itemMobLosed;
    }
    return styles.itemMobInitial;
  };

  const getConvertIconContainerClassName = () => {
    if (upgradeResult === null && (mobileInventorySkin || mobileUpgradeSkin)) {
      return styles.convertIconContainerAdded;
    }
    if (upgradeResult === false) {
      return styles.convertIconContainerLosed;
    }
    if (upgradeResult === true) {
      return styles.convertIconContainerWon;
    }
    return styles.convertIconContainer;
  };

  return (
    <div className="min-h-screen" style={{ background: "rgba(15, 10, 13, 1)" }}>
      <div className={styles.container}>
        <div
          className={cn(
            upgradeResult !== null
              ? styles.usersItem
              : mySkin
              ? styles.usersSkin
              : styles.usersItem
          )}
        >
          {upgradeResult === null && mySkin && (
            <>
              <Image
                src={mySkin.itemImage}
                alt="upgradeSkin"
                width={100}
                height={100}
                className={styles.skinImage}
              />
              <div className={styles.skinName}>
                <Typography
                  color="secondary"
                  weight="bold"
                  size="sm"
                  lineHeight="none"
                >
                  {mySkin.weaponName}
                </Typography>
                <Typography color="white" weight="semibold" lineHeight="none">
                  {mySkin.shortName}
                </Typography>
              </div>
            </>
          )}
        </div>
        <div
          className={cn(
            getInitialClassName(),
            styles.zone,
            getZonePulseClassName()
          )}
        >
          {skin && mySkin && (
            <div className={styles.initialBtn} style={{ zIndex: 10 }}>
              <CircularProgressBar
                percentage={upgradeChance}
                strokeWidth={8}
                className={styles.upgradeProgress}
                isSpinning={isSpinning}
                onSpinComplete={handleSpinComplete}
                resetColors={resetProgressColors}
              >
                {upgradeResult === null && (
                  <Typography
                    color="white"
                    size="h2"
                    weight="semibold"
                    lineHeight="none"
                  >
                    {upgradeChance}%
                  </Typography>
                )}

                <Typography
                  color={upgradeResult === null ? "secondary" : "white"}
                  weight={upgradeResult === null ? "normal" : "extrabold"}
                  size={upgradeResult === null ? "base" : "h3"}
                  lineHeight="none"
                >
                  {upgradeResult !== null
                    ? upgradeResult
                      ? "Успех!"
                      : "Неудача!"
                    : "шанс апгрейда"}
                </Typography>
                {upgradeResult === null && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={handleUpgrade}
                    disabled={isSpinning}
                  >
                    {isSpinning ? "Вращение..." : "Апгрейд"}{" "}
                    <Image
                      src="/upgrades/diamond.svg"
                      alt="upgrade"
                      width={16}
                      height={16}
                      className={styles.diamondIcon}
                    />
                  </Button>
                )}
              </CircularProgressBar>
            </div>
          )}
          {getBlurImageSrc() && (
            <Image
              src={getBlurImageSrc()!}
              alt="upgradeSkin"
              width={100}
              height={100}
              className={styles.blureImage}
              style={{ zIndex: 5 }}
            />
          )}
        </div>
        <div className={cn(getSkinItemClassName(), styles.itemZone)}>
          {skin && (
            <>
              <div className={styles.itemPrice}>
                <Typography
                  color="black"
                  weight="bold"
                  size="sm"
                  lineHeight="none"
                >
                  {skin.price}$
                </Typography>
              </div>
              <Image
                src={skin.itemImage}
                alt="upgradeSkin"
                width={100}
                height={100}
                className={styles.skinImage}
              />
              <div className={styles.skinName}>
                <Typography
                  color="secondary"
                  weight="bold"
                  size="sm"
                  lineHeight="none"
                >
                  {skin.weaponName}
                </Typography>
                <Typography color="white" weight="semibold" lineHeight="none">
                  {skin.shortName}
                </Typography>
              </div>
            </>
          )}
        </div>
        <div className={styles.balanceSection}>
          <BalanceSlider
            balance={balance}
            onValueChange={handleBalanceChange}
            className={styles.balanceWidget}
          />
          <ToggleButtons activeTab={activeTab} onTabChange={handleTabChange} />
          <MultiplierButtons
            activeMultiplier={activeMultiplier}
            onMultiplierChange={handleMultiplierChange}
          />
        </div>
      </div>

      <div className={styles.containerMobile}>
        <div className={styles.zoneMobile}>
          <div
            className={cn(styles.initialMobile, getInitialMobileClassName())}
          >
            {mobileInventorySkin && mobileUpgradeSkin && (
              <div className={styles.mobileProgressContainer}>
                <CircularProgressBar
                  percentage={upgradeChance}
                  strokeWidth={8}
                  className={styles.mobileUpgradeProgress}
                  isSpinning={isSpinning}
                  onSpinComplete={handleSpinComplete}
                  resetColors={resetProgressColors}
                >
                  {upgradeResult === null && (
                    <Typography
                      color="white"
                      size="h3"
                      weight="semibold"
                      lineHeight="none"
                    >
                      {upgradeChance}%
                    </Typography>
                  )}
                  <Typography
                    color={upgradeResult === null ? "secondary" : "white"}
                    weight={upgradeResult === null ? "semibold" : "extrabold"}
                    size={upgradeResult === null ? "base" : "h4"}
                    lineHeight="none"
                    className={styles.upgradeResultTextMob}
                  >
                    {upgradeResult !== null
                      ? upgradeResult
                        ? "Успех!"
                        : "Неудача!"
                      : "шанс апгрейда"}
                  </Typography>
                </CircularProgressBar>
              </div>
            )}
            {(mobileInventorySkin || mobileUpgradeSkin) && (
              <Button
                variant="primary"
                size="medium"
                onClick={handleUpgrade}
                disabled={isSpinning}
                className={styles.mobileUpgradeButton}
              >
                Апгрейд{" "}
                <Image
                  src="/upgrades/diamond.svg"
                  alt="upgrade"
                  width={16}
                  height={16}
                  style={{ rotate: "180deg" }}
                  className={styles.diamondIcon}
                />
              </Button>
            )}
          </div>

          {(mobileInventorySkin || mobileUpgradeSkin) &&
            upgradeResult === null && (
              <Image
                src="/upgrades/addedMobBlure.svg"
                alt="convert"
                width={0}
                height={0}
                className={styles.addedMobBlureIcon}
              />
            )}
          {upgradeResult === false && (
            <Image
              src="/upgrades/loseMobBlure.svg"
              alt="convert"
              width={0}
              height={0}
              className={styles.addedMobBlureIcon}
            />
          )}
          {upgradeResult === true && (
            <Image
              src="/upgrades/wonMobBlure.svg"
              alt="convert"
              width={0}
              height={0}
              className={styles.addedMobBlureIcon}
            />
          )}
        </div>
        <div className={styles.itemsZoneMobile}>
          <div className={styles.itemZoneMobile}>
            <div className={cn(styles.itemMob, getItemMobClassName())}>
              {mobileInventorySkin ? (
                <>
                  <Image
                    src="/upgrades/selectedLogo.svg"
                    alt="logo"
                    width={0}
                    height={0}
                    className={styles.initialLogoIcon}
                  />
                  <Image
                    src={mobileInventorySkin.itemImage}
                    alt="inventory skin"
                    width={60}
                    height={60}
                    className={styles.selectedSkinImage}
                  />
                  <UnstyledButton
                    className={styles.minusButton}
                    onClick={handleRemoveInventorySkin}
                  >
                    <Image
                      src="/upgrades/minus.svg"
                      alt="-"
                      width={24}
                      height={24}
                      className={styles.minusIcon}
                    />
                  </UnstyledButton>
                  <Typography
                    color="white"
                    weight="semibold"
                    lineHeight="none"
                    size="xs"
                    className={styles.selectedSkinName}
                  >
                    {mobileInventorySkin.weaponName}
                  </Typography>
                  <Typography
                    color="secondary"
                    weight="normal"
                    lineHeight="none"
                    size="xs"
                    className={styles.selectedSkinShortName}
                  >
                    {mobileInventorySkin.shortName}
                  </Typography>
                </>
              ) : (
                <>
                  <Image
                    src="/upgrades/add.svg"
                    alt="skin"
                    width={0}
                    height={0}
                    className={styles.addIcon}
                  />
                  <Image
                    src="/upgrades/logo.svg"
                    alt="skin"
                    width={0}
                    height={0}
                    className={styles.initialLogoIcon}
                  />
                  <Typography
                    color="secondary"
                    weight="semibold"
                    lineHeight="none"
                    size="xs"
                    className={styles.initialText}
                  >
                    выберите предмет <br /> для апгрейда
                  </Typography>
                </>
              )}
            </div>
          </div>
          {mobileInventorySkin || mobileUpgradeSkin ? (
            <div
              className={cn(
                styles.convertIconContainer,
                getConvertIconContainerClassName()
              )}
            >
              <Image
                src="/upgrades/activeConvert.svg"
                alt="arrow"
                width={24}
                height={24}
                className={styles.activeConvertIcon}
              />
            </div>
          ) : (
            <Image
              src="/upgrades/convert.svg"
              alt="arrow"
              width={24}
              height={24}
              className={styles.convertIcon}
            />
          )}

          <div className={styles.itemZoneMobile}>
            <div className={cn(styles.itemMob, getItemMobClassName())}>
              {mobileUpgradeSkin ? (
                <>
                  <Image
                    src="/upgrades/selectedLogo.svg"
                    alt="logo"
                    width={0}
                    height={0}
                    className={styles.initialLogoIcon}
                  />
                  <Image
                    src={mobileUpgradeSkin.itemImage}
                    alt="inventory skin"
                    width={60}
                    height={60}
                    className={styles.selectedSkinImage}
                  />
                  <UnstyledButton
                    className={styles.minusButton}
                    onClick={handleRemoveUpgradeSkin}
                  >
                    <Image
                      src="/upgrades/minus.svg"
                      alt="-"
                      width={24}
                      height={24}
                      className={styles.minusIcon}
                    />
                  </UnstyledButton>
                  <div className={styles.selectedSkinPrice}>
                    <Typography
                      color="primary"
                      weight="bold"
                      lineHeight="none"
                      size="xs"
                    >
                      {mobileUpgradeSkin.price}$
                    </Typography>
                  </div>
                  <Typography
                    color="white"
                    weight="semibold"
                    lineHeight="none"
                    size="xs"
                    className={styles.selectedSkinName}
                  >
                    {mobileUpgradeSkin.weaponName}
                  </Typography>
                  <Typography
                    color="secondary"
                    weight="normal"
                    lineHeight="none"
                    size="xs"
                    className={styles.selectedSkinShortName}
                  >
                    {mobileUpgradeSkin.shortName}
                  </Typography>
                </>
              ) : (
                <>
                  <Image
                    src="/upgrades/add.svg"
                    alt="skin"
                    width={0}
                    height={0}
                    className={styles.addIcon}
                  />
                  <Image
                    src="/upgrades/logo.svg"
                    alt="skin"
                    width={0}
                    height={0}
                    className={styles.initialLogoIcon}
                  />
                  <Typography
                    color="secondary"
                    weight="semibold"
                    lineHeight="none"
                    size="xs"
                    className={styles.initialText}
                  >
                    выберите предмет <br /> для апгрейда
                  </Typography>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.toggleButtonsContainer}>
          <ToggleButtons activeTab={activeTab} onTabChange={handleTabChange} />
          <MultiplierButtons
            activeMultiplier={activeMultiplier}
            onMultiplierChange={handleMultiplierChange}
          />
        </div>
        <BalanceSlider
          balance={balance}
          onValueChange={handleBalanceChange}
          className={styles.balanceWidgetMobile}
        />
      </div>

      <div className={styles.gridContainer}>
        <div
          className={styles.gridItem}
          style={{ height: user ? "fit-content" : "650px" }}
        >
          <div className={styles.filters}>
            <Typography color="secondary" weight="semibold" size="xl">
              Ваш инвентарь
            </Typography>
            <div className={styles.inputContainer}>
              <Input placeholder="От" className={styles.input} endIcon={"$"} />
              <Input placeholder="До" className={styles.input} endIcon={"$"} />
              <Input
                className={styles.input}
                endIcon={
                  <Image
                    src="/icons/search-normal.svg"
                    alt="search"
                    width={24}
                    height={24}
                    className={styles.searchIcon}
                  />
                }
              />
            </div>
          </div>
          <div
            className={styles.inventoryContainer}
            style={{ height: user ? "fit-content" : "555px" }}
          >
            {user ? (
              <div className={styles.skinsGrid}>
                {mockSkins.map((skinItem) => (
                  <div key={skinItem.id} className={styles.skinCardWrapper}>
                    <SkinCard skin={skinItem} withState={false} />
                    {mySkin?.id !== skinItem.id && (
                      <div className={styles.hoverActions}>
                        <UnstyledButton
                          className={styles.actionButton}
                          onClick={() => handleMySkinClick(skinItem)}
                        >
                          <div className={styles.plusIcon}>
                            {mySkin?.id === skinItem.id ? (
                              <Image
                                src="/icons/addedSkin.svg"
                                alt="addedSkin"
                                width={40}
                                height={40}
                              />
                            ) : (
                              <Image
                                src="/icons/addSkin.svg"
                                alt="Skin"
                                width={40}
                                height={40}
                              />
                            )}
                          </div>
                        </UnstyledButton>
                      </div>
                    )}

                    {mySkin?.id === skinItem.id && (
                      <div className={styles.selectedOverlay}>
                        <Image
                          src="/icons/addedSkin.svg"
                          alt="addedSkin"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.inventoryEmpty}>
                <Typography color="secondary" weight="semibold" size="xl">
                  Для доступа к апгрейдам необходима <br /> авторизация
                </Typography>
                <Button
                  variant="primary"
                  size="large"
                  style={{ width: "200px" }}
                >
                  Авторизация
                </Button>
              </div>
            )}
          </div>
        </div>
        <div
          className={styles.gridItem}
          style={{ height: user ? "fit-content" : "650px" }}
        >
          <div className={styles.filters}>
            <Typography color="secondary" weight="semibold" size="xl">
              Скины
            </Typography>
            <div className={styles.inputContainer}>
              <Input placeholder="От" className={styles.input} endIcon={"$"} />
              <Input placeholder="До" className={styles.input} endIcon={"$"} />
              <Input
                className={styles.input}
                endIcon={
                  <Image
                    src="/icons/search-normal.svg"
                    alt="search"
                    width={24}
                    height={24}
                    className={styles.searchIcon}
                  />
                }
              />
            </div>
          </div>
          <div
            className={styles.inventoryContainer}
            style={{ height: user ? "fit-content" : "555px" }}
          >
            {user ? (
              <div className={styles.skinsGrid}>
                {mockSkinsForUpgrade.map((skinItem) => (
                  <div key={skinItem.id} className={styles.skinCardWrapper}>
                    <SkinCard skin={skinItem} withState={false} />
                    {skin?.id !== skinItem.id && (
                      <div className={styles.hoverActions}>
                        <UnstyledButton
                          className={styles.actionButton}
                          onClick={() => handleSkinClick(skinItem)}
                        >
                          <div className={styles.plusIcon}>
                            {skin?.id === skinItem.id ? (
                              <Image
                                src="/icons/addedSkin.svg"
                                alt="addedSkin"
                                width={40}
                                height={40}
                              />
                            ) : (
                              <Image
                                src="/icons/addSkin.svg"
                                alt="addedSkin"
                                width={40}
                                height={40}
                              />
                            )}
                          </div>
                        </UnstyledButton>
                      </div>
                    )}
                    {skin?.id === skinItem.id && (
                      <div className={styles.selectedOverlay}>
                        <Image
                          src="/icons/addedSkin.svg"
                          alt="addedSkin"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.inventoryEmpty}>
                <Typography color="secondary" weight="semibold" size="xl">
                  Для доступа к апгрейдам необходима <br /> авторизация
                </Typography>
                <Button
                  variant="primary"
                  size="large"
                  style={{ width: "200px" }}
                >
                  Авторизация
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.gridContainerMobile}>
        <div className={styles.mobileTabs}>
          <button
            className={`${styles.mobileTab} ${
              mobileActiveTab === "inventory" ? styles.active : ""
            }`}
            onClick={() => handleMobileTabChange("inventory")}
          >
            <Typography
              size="sm"
              weight="semibold"
              color={mobileActiveTab === "inventory" ? "white" : "secondary"}
              className={styles.mobileTabText}
            >
              Ваш инвентарь
            </Typography>
          </button>
          <button
            className={`${styles.mobileTab} ${
              mobileActiveTab === "skins" ? styles.active : ""
            }`}
            onClick={() => handleMobileTabChange("skins")}
          >
            <Typography
              size="sm"
              weight="semibold"
              color={mobileActiveTab === "skins" ? "white" : "secondary"}
              className={styles.mobileTabText}
            >
              Скины
            </Typography>
          </button>
        </div>

        <div className={styles.mobileGridItem}>
          <div className={styles.filters}>
            <div className={styles.inputContainer}>
              <Input placeholder="От" className={styles.input} endIcon={"$"} />
              <Input placeholder="До" className={styles.input} endIcon={"$"} />
            </div>
            <Input
              className={styles.input}
              endIcon={
                <Image
                  src="/icons/search-normal.svg"
                  alt="search"
                  width={24}
                  height={24}
                  className={styles.searchIcon}
                />
              }
            />
          </div>
          <div className={styles.inventoryContainer}>
            {user ? (
              <div className={styles.skinsGrid}>
                {(mobileActiveTab === "inventory"
                  ? mockSkins
                  : mockSkinsForUpgrade
                ).map((skinItem) => (
                  <div key={skinItem.id} className={styles.skinCardWrapper}>
                    <SkinCard skin={skinItem} withState={false} />
                    {(mobileActiveTab === "inventory"
                      ? mySkin?.id
                      : skin?.id) !== skinItem.id && (
                      <div className={styles.hoverActions}>
                        <UnstyledButton
                          className={styles.actionButton}
                          onClick={() => handleMobileSkinClick(skinItem)}
                        >
                          <div className={styles.plusIcon}>
                            {(mobileActiveTab === "inventory"
                              ? mySkin?.id
                              : skin?.id) === skinItem.id ? (
                              <Image
                                src="/icons/addedSkin.svg"
                                alt="addedSkin"
                                width={40}
                                height={40}
                              />
                            ) : (
                              <Image
                                src="/icons/addSkin.svg"
                                alt="Skin"
                                width={40}
                                height={40}
                              />
                            )}
                          </div>
                        </UnstyledButton>
                      </div>
                    )}

                    {(mobileActiveTab === "inventory"
                      ? mySkin?.id
                      : skin?.id) === skinItem.id && (
                      <div className={styles.selectedOverlay}>
                        <Image
                          src="/icons/addedSkin.svg"
                          alt="addedSkin"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.inventoryEmpty}>
                <Typography color="secondary" weight="semibold" size="xl">
                  Для доступа к апгрейдам необходима <br /> авторизация
                </Typography>
                <Button
                  variant="primary"
                  size="large"
                  style={{ width: "200px" }}
                >
                  Авторизация
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
