import { useTranslation } from "react-i18next";
import FormContent from "../../components/layouts/formContent/formContent";
const AnswerSPA = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="set-page">
        <div>
          <FormContent />
        </div>
      </div>
    </>
  );
};

export default AnswerSPA;
