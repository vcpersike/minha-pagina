import { AnimationController, Animation } from '@ionic/angular';

export const slideInAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
  const animationCtrl = new AnimationController();

  const enteringAnimation = animationCtrl
  .create()
  .addElement(opts.enteringEl)
  .beforeStyles({ opacity: 1 })
  .duration(300)
  .easing('ease-in-out')
  .fromTo('transform', 'translateX(100%)', 'translateX(0)');

  const leavingAnimation = animationCtrl
    .create()
    .addElement(opts.leavingEl)
    .beforeStyles({ opacity: 1 })
    .duration(300)
    .easing('ease-in-out')
    .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

  return animationCtrl.create().addAnimation([enteringAnimation, leavingAnimation]);
};
