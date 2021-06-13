import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

const CustomNotification = ({ title, theme }) => {
	return <div style={{ color: theme }}>{title}</div>;
};
  
const CustomNotificationWithTheme = withTheme(CustomNotification);

const ToastSuccess = (message) => {
	const theme = useTheme();
	toast.notify(() => <CustomNotificationWithTheme title={message} theme={theme.success} />, {
		position: 'top-right'
	})
};

const ToastError = (message) => {
	const theme = useTheme();
	toast.notify(() => <CustomNotificationWithTheme title={message} theme={theme.danger} />, {
		position: 'top-right'
	})
};

export default {ToastSuccess, ToastError};