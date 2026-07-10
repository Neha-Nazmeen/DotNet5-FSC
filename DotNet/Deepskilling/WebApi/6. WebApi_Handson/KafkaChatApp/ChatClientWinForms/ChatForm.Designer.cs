namespace ChatClientWinForms
{
    partial class ChatForm
    {
        private System.ComponentModel.IContainer components = null;
        private System.Windows.Forms.TextBox txtChatLog;
        private System.Windows.Forms.TextBox txtMessage;
        private System.Windows.Forms.Button btnSend;
        private System.Windows.Forms.TextBox txtUsername;
        private System.Windows.Forms.Label lblUsername;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.txtChatLog = new System.Windows.Forms.TextBox();
            this.txtMessage = new System.Windows.Forms.TextBox();
            this.btnSend = new System.Windows.Forms.Button();
            this.txtUsername = new System.Windows.Forms.TextBox();
            this.lblUsername = new System.Windows.Forms.Label();
            this.SuspendLayout();

            this.lblUsername.AutoSize = true;
            this.lblUsername.Location = new System.Drawing.Point(12, 15);
            this.lblUsername.Text = "Username:";

            this.txtUsername.Location = new System.Drawing.Point(90, 12);
            this.txtUsername.Width = 150;

            this.txtChatLog.Location = new System.Drawing.Point(12, 45);
            this.txtChatLog.Multiline = true;
            this.txtChatLog.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.txtChatLog.ReadOnly = true;
            this.txtChatLog.Size = new System.Drawing.Size(460, 300);

            this.txtMessage.Location = new System.Drawing.Point(12, 355);
            this.txtMessage.Width = 350;

            this.btnSend.Location = new System.Drawing.Point(370, 353);
            this.btnSend.Text = "Send";
            this.btnSend.Width = 100;
            this.btnSend.Click += new System.EventHandler(this.btnSend_Click);

            this.ClientSize = new System.Drawing.Size(484, 391);
            this.Controls.Add(this.lblUsername);
            this.Controls.Add(this.txtUsername);
            this.Controls.Add(this.txtChatLog);
            this.Controls.Add(this.txtMessage);
            this.Controls.Add(this.btnSend);
            this.Text = "Kafka Chat Client";
            this.ResumeLayout(false);
            this.PerformLayout();
        }
    }
}
