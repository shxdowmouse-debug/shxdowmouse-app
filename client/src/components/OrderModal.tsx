import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import NotifyForm from "@/components/notifyform";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { name: string };
  mode?: "notify" | "preorder" | "comingsoon"; // optional, defaults below
}

export function OrderModal({ isOpen, onClose, product, mode = "notify" }: OrderModalProps) {
  const titles = {
    notify: "Get Notified",
    preorder: "Pre‑Order Now",
    comingsoon: "Coming Soon",
  };

  const descriptions = {
    notify: `Enter your email and we’ll notify you when ${product.name} launches.`,
    preorder: `Enter your email and we’ll send you the pre‑order link for ${product.name}.`,
    comingsoon: `Be the first to know when ${product.name} becomes available.`,
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-lg mx-auto rounded-3xl p-8 text-white
          bg-white/10 backdrop-blur-2xl border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        "
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold tracking-tight">
            {titles[mode]}
          </DialogTitle>

          <DialogDescription className="text-white/70 text-base">
            {descriptions[mode]}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <NotifyForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
